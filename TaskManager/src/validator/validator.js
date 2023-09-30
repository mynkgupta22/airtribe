class Validator {
  static validateTaskInfo(taskInfo) {
    if (
      taskInfo.hasownProperty("taskId") &&
      taskInfo.hasownProperty("task") &&
      taskInfo.hasownProperty("status") &&
      taskInfo.hasownProperty("Priority") &&
      taskInfo.hasownProperty("createdDate") &&
      taskInfo.hasownProperty("completedDate") &&
      taskInfo.hasownProperty("createdBy")
    ) {
      return {
        status: true,
        message: "task has been added",
      };
    } else {
      return {
        status: false,
        message: "Task info is malformed, please provide all the details",
      };
    }
  }
}
