import { reactive } from "vue";

export const state = reactive({
    isModalOpen: false,
    message: "",
    title: "",
    resolve: (x:any) => {},
    reject: (x:any) => {},
})

export function openModal(message: string, title: string) {
    state.isModalOpen = true;
    state.message = message;
    state.title = title;
}

export function closeModal() {
    state.isModalOpen = false;
}

export function confirm(message: string, title: string) {
    return new Promise((resolve, reject) => {

        openModal(message, title);

        state.resolve = resolve;
        state.reject = reject;
    })
    .finally(() => {
        state.isModalOpen = false;
    });
}