const staticData = require('./staticData');

const getCategoryResponse = (category = '') => {
  const tasks = staticData.hasOwnProperty(category) ? staticData[category] : [];
  const hasTasks = tasks.length > 0;
  
  return {
    status: hasTasks ? 200 : 404,
    categoryName: category.toString(),
    totalResults: tasks.length,
    tasks,
  }

}

module.exports = getCategoryResponse;