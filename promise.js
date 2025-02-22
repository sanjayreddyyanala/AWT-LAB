function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "Sanjay Reddy", role: "Developer" });
            } else {
                reject("Invalid User ID");
            }
        }, 2000);
    });
}

fetchUserData(1)
    .then(user => {
        console.log("User Data:", user);
    })
    .catch(error => {
        console.error("Error:", error);
    });

fetchUserData(-1)
    .then(user => {
        console.log("User Data:", user);
    })
    .catch(error => {
        console.error("Error:", error);
    });