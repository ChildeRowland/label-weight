
const adIds = [1,2,3,4,5,6];

const topData = [
	['2_people', 'man', 'woman'],
	['2_people', 'man', 'woman'],
	['2_people', 'woman']
];

const bottomData = [
	['2_people', 'man'],
	['2_people', 'man'],
	['1_people', 'man']
];

// find the most commonly occuring labels in the top ads
function commonOccuringLabels (labelMatrix) {

	const result = {};

	labelMatrix.forEach((labelArr) => {

		labelArr.forEach((label) => {

			if (result[label]) {
				result[label] += 1;
				return;
			}

			result[label] = 1;

		});

	});

	return result;

}

// find the most popular labels by percentage
function labelPercentOccuring(labelMatrix) {

	const result = {};

	const commonLabelsObj = commonOccuringLabels(labelMatrix);

	Object.keys(commonLabelsObj).forEach((label) => {

		result[label] = Math.round(commonLabelsObj[label] / labelMatrix.length * 100);

	});

	return result;

}

// find reoccuring series of labels accross top ads
function commonSeriesOfLabels(labelMatrix) {

	// store the taco arr in an object with the number of times the values appear

	const result = {};

	labelMatrix.forEach((labelArr) => {

		let labelCombinationMatrix = labelCombinations(labelArr);

	});

}

// console.log('\n *** most commonly occuring labels ***');
// console.log(commonOccuringLabels(topData));

// console.log('\n *** percentage occuring labels ***');
// console.log(labelPercentOccuring(topData));

// console.log('\n *** common series of labels ***');
// console.log(commonSeriesOfLabels([['2_people', 'man', 'woman', 'dog', 'cat']]));

function labelCombinations( list ){
  let set = [],
      listSize = list.length,
      combinationsCount = (1 << listSize);

  for (let i = 1; i < combinationsCount ; i++ ){
	  
	  let combination = [];
	  
	  for (let j = 0; j < listSize; j++){
      if ((i & (1 << j))){
        combination.push(list[j]);
      }
	  }

	  if (combination.length > 1) {
	  	set.push(combination);
	  }

  }

  return set;
}

var labelCombinations = powerSet(['2_people', 'man', 'woman', 'dog', 'cat']);

console.log(combinations);



