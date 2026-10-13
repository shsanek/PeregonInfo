(function () {
  "use strict";
  var data = window.PEREGON_MECHANICS;
  if (!data) return;
  function node(tag, text, cls) {
    var n = document.createElement(tag);
    if (text != null) n.textContent = text;
    if (cls) n.className = cls;
    return n;
  }
  function byId(id) { return document.getElementById("mechanics-" + id); }
  var list = byId("groups"), search = byId("search"), status = byId("status"), scope = byId("scope");
  var sweep = data.netsweep || { rows: {}, runs: [] };
  var netLabels = { pass: "Пройдено по сети", fail: "Ошибка по сети", none: "Сеть не проверялась" };
  var netFilter = node("select");
  netFilter.id = "mechanics-net";
  [["", "Все сетевые результаты"], ["pass", netLabels.pass], ["fail", netLabels.fail], ["none", netLabels.none]].forEach(function (o) {
    var option = node("option", o[1]); option.value = o[0]; netFilter.appendChild(option);
  });
  var netLabel = node("label", "Сетевая проверка (NETSWEEP)");
  netLabel.appendChild(netFilter);
  scope.parentNode.parentNode.insertBefore(netLabel, scope.parentNode.nextSibling);
  function netOf(item) { var r = sweep.rows[item.id]; return r ? r.result : "none"; }
  byId("note").textContent = data.note;
  byId("baseline").textContent = "Срез: " + data.updated + " · " + data.branch + " · " + data.revision +
    ". Статус реализации и сетевая проверка — разные поля. Частичные проверки перечислены в строках; полный проход остаётся открытым.";
  Object.keys(data.statuses).forEach(function (key) {
    var option = node("option", data.statuses[key]); option.value = key; status.appendChild(option);
  });
  Object.keys(data.scopes).forEach(function (key) {
    var option = node("option", data.scopes[key]); option.value = key; scope.appendChild(option);
  });
  data.axes.forEach(function (axis) { byId("axes").appendChild(node("li", axis)); });
  var total = data.groups.reduce(function (sum, g) { return sum + g.items.length; }, 0);
  var totals = {};
  data.groups.forEach(function (g) { g.items.forEach(function (item) { totals[item.status] = (totals[item.status] || 0) + 1; }); });
  function render() {
    var query = search.value.trim().toLocaleLowerCase("ru");
    var expanded = {};
    list.querySelectorAll("details[open]").forEach(function (d) { expanded[d.id] = true; });
    list.textContent = "";
    var visible = 0, groups = 0;
    data.groups.forEach(function (g) {
      if (scope.value && scope.value !== g.scope) return;
      var common = [g.id, g.title, g.sources.join(" ")].join(" ").toLocaleLowerCase("ru");
      var items = g.items.filter(function (item) {
        return (!status.value || status.value === item.status) && (!netFilter.value || netFilter.value === netOf(item)) &&
          (!query || (common + " " + item.id + " " + item.text).toLocaleLowerCase("ru").indexOf(query) !== -1);
      });
      if (!items.length) return;
      visible += items.length; groups++;
      var box = node("details", null, "panel mechanics-group");
      box.id = "mechanic-group-" + g.id;
      box.open = !!query || !!expanded[box.id];
      box.appendChild(node("summary", g.title + " · " + items.length + " · " + data.scopes[g.scope]));
      box.appendChild(node("p", "Будущая проверка вдвоём: " + g.observe));
      var sources = node("p", "Источники: ", "mechanics-sources");
      g.sources.forEach(function (path, i) {
        if (i) sources.appendChild(document.createTextNode(" · "));
        var a = node("a", path); a.href = "../" + path; sources.appendChild(a);
      });
      box.appendChild(sources);
      var wrap = node("div", null, "table-wrap"), table = node("table"), head = node("thead"), row = node("tr");
      ["ID", "Действие / состояние / ограничение", "Реализация", "Полный сетевой сценарий"].forEach(function (title) {
        var th = node("th", title); th.scope = "col"; row.appendChild(th);
      });
      head.appendChild(row); table.appendChild(head);
      var body = node("tbody");
      items.forEach(function (item) {
        var tr = node("tr"); tr.id = "mechanic-" + item.id;
        var idCell = node("td"), link = node("a", item.id); link.href = "#" + tr.id; idCell.appendChild(link); tr.appendChild(idCell);
        tr.appendChild(node("td", item.text));
        tr.appendChild(node("td", data.statuses[item.status]));
        var evidence = (data.evidence || {})[item.id];
        var net = sweep.rows[item.id];
        var out = item.status === "disabled" || item.status === "planned" || item.status === "removed";
        var result = node("td", out && !net ? "Вне действующего режима" : "");
        if (net) {
          var head = node("strong", netLabels[net.result] + " · NETSWEEP, " + net.checks + " пров.");
          head.style.color = net.result === "pass" ? "#2e7d32" : "#c62828";
          result.appendChild(head);
          result.appendChild(document.createTextNode(" Прогоны: "));
          net.runs.forEach(function (run, i) {
            if (i) result.appendChild(document.createTextNode(", "));
            var a = node("a", run); a.href = "shots/netsweep/runs/" + run + ".txt"; result.appendChild(a);
          });
          result.appendChild(document.createTextNode("."));
          if (net.failed && net.failed.length) result.appendChild(node("div", net.failed.join("; "), "mechanics-sources"));
        } else if (!out && !evidence) {
          result.textContent = "Не пройдено по этому реестру";
        }
        if (evidence) {
          result.appendChild(node("div", "Частично проверено · " + evidence.stage + ". " + evidence.text));
          var proof = node("a", "Результат и ограничения"); proof.href = evidence.href; result.appendChild(proof);
        }
        tr.appendChild(result);
        body.appendChild(tr);
      });
      table.appendChild(body); wrap.appendChild(table); box.appendChild(wrap); list.appendChild(box);
    });
    var netTotals = { pass: 0, fail: 0 };
    Object.keys(sweep.rows).forEach(function (id) { netTotals[sweep.rows[id].result] = (netTotals[sweep.rows[id].result] || 0) + 1; });
    byId("count").textContent = "Показано " + visible + " из " + total + " пунктов; разделов " + groups + " из " + data.groups.length +
      ". Во всём реестре: " + Object.keys(data.statuses).map(function (key) { return data.statuses[key] + " — " + (totals[key] || 0); }).join("; ") +
      ". Сеть (NETSWEEP " + (sweep.revision || "") + "): пройдено " + netTotals.pass + ", ошибок " + netTotals.fail + ", прогонов " + sweep.runs.length + ".";
    if (!visible) list.appendChild(node("p", "Совпадений нет. Измените поиск или фильтры.", "muted"));
  }
  function revealHash() {
    if (!/^#mechanic-[A-Z]+-\d+$/.test(location.hash)) return;
    var id = location.hash.slice(1), target = document.getElementById(id);
    if (!target) {
      search.value = ""; status.value = ""; scope.value = ""; render();
      target = document.getElementById(id);
    }
    if (!target) return;
    target.closest("details").open = true;
    target.scrollIntoView({ block: "center" });
  }
  netFilter.addEventListener("change", render);
  search.addEventListener("input", render);
  status.addEventListener("change", render);
  scope.addEventListener("change", render);
  byId("expand").addEventListener("click", function () { list.querySelectorAll("details").forEach(function (d) { d.open = true; }); });
  byId("collapse").addEventListener("click", function () { list.querySelectorAll("details").forEach(function (d) { d.open = false; }); });
  window.addEventListener("hashchange", revealHash);
  render();
  revealHash();
})();
