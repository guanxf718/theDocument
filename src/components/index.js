/**
 * app部件
 */
// 管理平台整体构架
const AppLayout = () =>
    import ('./app/appLayout');
const AppHeader = () =>
    import ('./app/appHeader');
const AppContent = () =>
    import ('./app/appContent');

const ApiContent = () =>
    import ('./base/apiContent');

module.exports = {
    AppLayout,
    AppHeader,
    AppContent,
    ApiContent
};