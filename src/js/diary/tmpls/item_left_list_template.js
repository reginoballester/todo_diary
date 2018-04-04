export default function itemLeftTemplate(data) {
    return `
        <div class="row row-content">
            <div class="col-xs-2 text-center table-cell">
                <div class="name-day">${data.nameDay}</div>
                <div class="num-day">${data.numDay}</div>
            </div>
            <div class="col-xs-2 text-center">
                <div class="row table-cell">&nbsp;</div>
                <div class="row table-cell">&nbsp;</div>
                <div class="row table-cell">&nbsp;</div>
                <div class="row table-cell">&nbsp;</div>
            </div>
            <div class="col-xs-8 text-center">
                <div class="row table-cell">${data.description}</div>
                <div class="row table-cell">&nbsp;</div>
                <div class="row table-cell">&nbsp;</div>
                <div class="row table-cell">&nbsp;</div>
            </div>
        </div>`;
}
