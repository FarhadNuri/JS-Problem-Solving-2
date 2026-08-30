function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

function findMax(nums) {
    let max = nums[0];

    for (let num of nums) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
}

function sumArray(nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum;
}

function countVowels(str) {
    let count = 0;

    for (let char of str) {
        if ("aeiou".includes(char.toLowerCase())) {
            count++;
        }
    }

    return count;
}

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

function flattenArray(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

function groupAnagrams(strs) {
    let groups = {};

    for (let str of strs) {
        let key = str.split("").sort().join("");

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(str);
    }

    return Object.values(groups);
}

function lengthOfLongestSubstring(s) {
    let current = "";
    let maxLength = 0;

    for (let char of s) {
        if (current.includes(char)) {
            current = current.substring(current.indexOf(char) + 1);
        }

        current += char;

        if (current.length > maxLength) {
            maxLength = current.length;
        }
    }

    return maxLength;
}

function deepClone(obj) {
    let clone = {};

    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            clone[key] = deepClone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
}