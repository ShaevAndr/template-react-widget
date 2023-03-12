import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const Wid = {

    render() {
        console.log('render');
        return true;
    },

    init() {
        console.log('init');
        return true;
    },

    bind_actions() {

        console.log('bind_actions');
        return true;
    },

    settings() {
    },

    advancedSettings() {
        const root = ReactDOM.createRoot(document.getElementById('list_page_holder'));
        root.render(
            <App />
        );
    },

    onSave() {

    },

    destroy() {
        console.log('destroy');
    },

    contacts_selected() {

    },

    leads_selected() {

    },

    tasks_selected() {

    }

};

export default Wid;