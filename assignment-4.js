//
//
//Problem 1: Ana To Vori
//
//
function anaToVori(ana) {
    if (typeof ana !== "number") {
        return "please input a number";
    } else {
        let anaValue = 0.0625;
        let vori = anaValue * ana;
        return vori;
    }
}

const totalVori = anaToVori(1);
console.log(totalVori);
//
//
// Problem 2: Panda Cost
//
//
function pandaCost(singara, somucha, jilapi) {
    let singaraPrice = singara * 7;
    let somuchaPrice = somucha * 10;
    let jilapiPrice = jilapi * 15;
    const total = singaraPrice + somuchaPrice + jilapiPrice;
    return total;
}
const totalprice = pandaCost(2, 2, 2);
console.log(totalprice);

//
//
//problem 3: Picnic Budget
//
//

function picnicBudget(peopleQuantity) {
    if (peopleQuantity <= 100) {
        let first100 = peopleQuantity * 5000;
        return first100;
    } else if (peopleQuantity > 100 && peopleQuantity <= 200) {
        let second100 = peopleQuantity * 4000;
        return second100;
    } else if (peopleQuantity > 200) {
        let restPeoples = peopleQuantity * 3000;
        return restPeoples;
    }
}

const totalQuantity = picnicBudget(201);
console.log(totalQuantity);

//
//
// Problem 4 : Odd Friend
//
//

function oddFriend(friends) {
    if (!Array.isArray(friends)) {
        return friends;
    } else {
        for (const friend of friends) {
            let oddFriends = friend.length;
            if (oddFriends % 2 != 0) {
                oddFriends = friend;
                return oddFriends;
            }
        }
    }
}

const friendsName = [
    "Shakil",
    "Tormuj Ali",
    "bijoy",
    "Shihab Chowdhury",
    "Sobuj",
    "Lal Bhai",
    "Neel Bhai",
    "Kala Bhai",
    "Motku Bhai",
    "Shourav Ganguli",
    "Sakib Al Hasan",
    "Tamim Iqbal",
];

const oddFriendName = oddFriend(friendsName);
console.log(oddFriendName);