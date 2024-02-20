export const detectFirefox = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    return userAgent.indexOf('firefox') > -1;

}
