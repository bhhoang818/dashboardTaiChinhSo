$(document).ready(function () {
    pickerDate();
    chartJs();
    progressBar();
})
const pickerDate = () => {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('ll') + ' - ' + end.format('ll'));
    }
    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        "locale": {
            "applyLabel": "Áp dụng",
            "cancelLabel": "Hủy",
        },
        ranges: {
            'Hôm nay': [moment()],
            'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Tuần này': [moment().subtract(6, 'days'), moment()],
            'Tuần trước': [moment().subtract(12, 'days'), moment().subtract(6, 'days')],
            '3 tháng': [moment().subtract(3, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            '6 tháng': [moment().subtract(6, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Năm nay': [moment().startOf('year'), moment().endOf('year')],
            'Năm trước': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
        }
    }, cb);
    cb(start, end);
}
const chartJs = () => {
    var myLineChart = new Chart("myChart1", {
        type: "doughnut",
        data: {
            datasets: [{
                data: [35, 25, 5, 35],
                backgroundColor: [
                    '#EB2629',
                    '#FCA5A6',
                    '#FFD3D3',
                    '#EAEEF2'
                ],
            }]
        },
        options: {
            cutout: 75,
            hoverOffset: 5,
            borderWidth: 3,
            responsive: true
        }
    });
    var myLineChart = new Chart("myChart2", {
        type: "doughnut",
        data: {
            datasets: [{
                data: [40, 50, 24, 24, 16, 6],
                backgroundColor: [
                    '#EB2629',
                    '#FF494C',
                    '#FFB9BA',
                    '#FFD3D3',
                    '#EAEEF2',
                    '#EAEEF2'
                ],
            }]
        },
        options: {
            cutout: 75,
            hoverOffset: 5,
            borderWidth: 3,
            responsive: true
        }
    });
}
const progressBar = () => {
    var bars = document.querySelectorAll('.progress > .progress-bar');
    setInterval(function () {
        bars.forEach(function (bar) {
            var getWidth = parseFloat(bar.dataset.progress);
            for (var i = 0; i < getWidth; i++) {
                bar.style.width = i + '%';
            }
        });
    }, 500);
}