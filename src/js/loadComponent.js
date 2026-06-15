export async function loadComponent(id, file, onLoad) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
  if (onLoad) onLoad();
}
