/**
 * Adiciona os parâmetros UTM da URL atual ao link de checkout
 */
export function addUTMParams(checkoutUrl: string): string {
    const currentUrl = new URL(window.location.href);
    const checkoutUrlObj = new URL(checkoutUrl);

    // Lista de parâmetros UTM para repassar
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

    // Copia todos os parâmetros UTM da URL atual para o checkout
    utmParams.forEach(param => {
        const value = currentUrl.searchParams.get(param);
        if (value) {
            checkoutUrlObj.searchParams.set(param, value);
        }
    });

    return checkoutUrlObj.toString();
}
