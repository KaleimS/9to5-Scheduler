
dayjs.extend(window.dayjs_plugin_advancedFormat);

$('#currentDay').text(dayjs().format('dddd Do MMMM YYYY'));