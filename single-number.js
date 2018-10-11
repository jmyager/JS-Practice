const input = [1,3,1,-1,3];

var singleNumber = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++){
            if (nums[i] == [nums[j]]) {
                console.log(nums[i] + 'and' + nums[j]);
                console.log('nums: ' + nums);
                nums = nums.filter(num => num != nums[i]);
            }
        }
    }
    return nums[0];
};

console.log(singleNumber(input));


// grab first number
// compare to next number
// if different, continue until done and then export number
// if same, move to next number