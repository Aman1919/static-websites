const row_add = document.querySelector('#row-btn-add')
const row_del = document.querySelector('#row-btn-del')
const col_add = document.querySelector('#col-btn-add');
const col_del = document.querySelector('#col-btn-del');
const generate_html_btn = document.querySelector('#generate-html');
//buttons
const contextmenu = document.querySelector("#contextMenu")
const code_space = document.querySelector('#html-code-space');
let table = document.querySelector('#table');
let tbody = document.querySelector('tbody');
const thead_th = document.querySelector('thead tr');
let tbody_tr = document.querySelectorAll('tbody tr');
let th = document.querySelectorAll('th');
let td = document.querySelectorAll('td');


row_add.addEventListener('click', () => {
        const ntr = document.createElement('tr');
        let tr = document.querySelectorAll('tr');
        let n = 0; 
        tr.forEach(r => {
                console.log(r.children);
                // if(r.child)
                n = Math.max(n, r.children.length);
        })                
        for (let i = 0; i < n;i++){
                const ntd = document.createElement('td');
                ntd.contentEditable = 'true';
                ntr.appendChild(ntd);
        ntd.addEventListener('contextmenu', (e) => showcontextmenu(e,ntd))
        }
        tbody.appendChild(ntr);
})

row_del.addEventListener('click', () => {
       tbody  = document.querySelector('tbody');
        if (tbody.length <=1) {
                return;
        }
        tbody.removeChild(tbody.lastChild);

})

col_add.addEventListener('click', () => {
        tbody_tr = document.querySelectorAll('tbody tr');
        const t = document.createElement('th');
        t.contentEditable = 'true';
        thead_th.appendChild(t)
        console.log(tbody_tr);
        tbody_tr.forEach(tr => {
                const el = document.createElement('td');
                el.contentEditable = 'true';
                tr.appendChild(el);
        el.addEventListener('contextmenu', (e) => showcontextmenu(e,el))
                
        })
        t.addEventListener('contextmenu', (e) => showcontextmenu(e,t))
})

col_del.addEventListener('click', () => {
        if (th.length <= 1) return;
        tbody_tr = document.querySelectorAll('tbody tr');
        
        thead_th.removeChild(thead_th.lastChild);
        tbody_tr.forEach(tr => {
                tr.removeChild(tr.lastChild);
        })
})

generate_html_btn.addEventListener('click', () => {
        const text = table.innerHTML
        code_space.innerText  = "<table> " +  text.replace(/ contenteditable="true"/g, '') + " </table>";
})


td.forEach((t) => {t.addEventListener('contextmenu', (e) => showcontextmenu(e,t))})
th.forEach((t) => {t.addEventListener('contextmenu', (e) => showcontextmenu(e,t))})



window.addEventListener('click', (e) => {
        const rect = contextmenu.getBoundingClientRect();
        console.log(rect,e.clientX,e.clientY);
        if (e.clientX >= rect.x && e.clientX <= rect.x + rect.width && e.clientY >= rect.y && e.clientY <= rect.y + rect.height) return;
        contextmenu.style.display = 'none';
})


function showcontextmenu(e,t) {
               e.preventDefault()
                const rect = t.getBoundingClientRect();
                const rect2 = table.getBoundingClientRect();
                contextmenu.style.position = 'absolute'
                contextmenu.style.left = Math.abs(Math.floor(rect.left - rect2.left)) +'px';
                contextmenu.style.top = Math.abs(Math.floor(rect.top - rect2.top)) + 25 +'px';
        contextmenu.style.display = 'block';

const add_span = document.querySelector("#add-span");

        add_span.addEventListener('click', () => {
        const row_span_inpt = document.querySelector('#row-span') 
                const col_span_inpt = document.querySelector("#col-span");
                if (row_span_inpt.value == 1 || col_span_inpt.value == 1) return;
                if (row_span_inpt.value) t.setAttribute('rowspan', row_span_inpt.value);
                if (col_span_inpt.value) {
                        t.setAttribute('colspan', col_span_inpt.value)
                        const parentNode = t.parentNode;
                        parentNode.removeChild(parentNode.lastChild);
                };
                row_span_inpt.value = 0;
                col_span_inpt.value = 0;
                
                contextmenu.style.display = 'none';
        })
}