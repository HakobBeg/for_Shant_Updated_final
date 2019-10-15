export const addDataToStorage = (studentData) => {
    try {
        const jsonData = JSON.stringify(studentData);
        localStorage.setItem(studentData['id'], jsonData);
    } catch (e) {
        alert(e);
    }
};


export const getDataFromStorage = (studentId) => {
    try {
        const jsonData = localStorage.getItem(studentId);
        const data = JSON.parse(jsonData);
        return data;
    } catch (e) {
        alert(e);
    }
};

export const removeDataFromStorage = (studentId) => {
    try {
        localStorage.removeItem(studentId);
    } catch (e) {
        alert(e);
    }
};

