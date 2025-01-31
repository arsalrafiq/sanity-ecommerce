import umami from '@umami/node';

umami.init({
    websiteId: '7a2bcf2d-6e8f-456c-b23a-5a9461aa184d', // Your website id
    hostUrl: 'https://cloud.umami.is', // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}