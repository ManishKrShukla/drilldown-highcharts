
export const EXECUTION_STATUS = {
    1 : 'pass',
    2 : 'fail',
    3 : 'blocked',
    4 : 'wip',
    'unexecuted' : 'unexecuted'
};

let data1 = [
  {
    "sprint": {
      "name": "sprint-1",
      "status": 0,
      "id": 1,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 24,
      "2": 32,
      "3": 32,
      "4": 16,
      "unexecuted": 24
    }
  },
  {
    "sprint": {
      "name": "sprint-2",
      "status": 0,
      "id": 2,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 12,
      "2": 48,
      "3": 32,
      "4": 9,
      "unexecuted": 24
    }
  },
  {
    "sprint": {
      "name": "sprint-3",
      "status": 0,
      "id": 3,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 24,
      "2": 0,
      "3": 48,
      "4": 0,
      "unexecuted": 6
    }
  },
  {
    "sprint": {
      "name": "sprint-4",
      "status": 0,
      "id": 4,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 4,
      "3": 0,
      "4": 4,
      "unexecuted": 6
    }
  },
  {
    "sprint": {
      "name": "sprint-5",
      "status": 0,
      "id": 5,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 48,
      "2": 48,
      "3": 18,
      "4": 0,
      "unexecuted": 3
    }
  },
  {
    "sprint": {
      "name": "sprint-6",
      "status": 0,
      "id": 6,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 4,
      "2": 0,
      "3": 48,
      "4": 32,
      "unexecuted": 0
    }
  },
  {
    "sprint": {
      "name": "sprint-7",
      "status": 0,
      "id": 7,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 24,
      "2": 0,
      "3": 12,
      "4": 6,
      "unexecuted": 1
    }
  },
  {
    "sprint": {
      "name": "sprint-8",
      "status": 0,
      "id": 8,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 24,
      "2": 9,
      "3": 0,
      "4": 16,
      "unexecuted": 24
    }
  },
  {
    "sprint": {
      "name": "sprint-9",
      "status": 0,
      "id": 9,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 6,
      "2": 12,
      "3": 12,
      "4": 48,
      "unexecuted": 12
    }
  },
  {
    "sprint": {
      "name": "sprint-10",
      "status": 0,
      "id": 10,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 12,
      "2": 24,
      "3": 4,
      "4": 4,
      "unexecuted": 9
    }
  }
];

let data2 = [
  {
    "sprint": {
      "name": "sprint-1",
      "status": 0,
      "id": 1,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 16,
      "2": 16,
      "3": 48,
      "4": 0,
      "unexecuted": 3
    }
  },
  {
    "sprint": {
      "name": "sprint-2",
      "status": 0,
      "id": 2,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 4,
      "2": 32,
      "3": 48,
      "4": 12,
      "unexecuted": 0
    }
  },
  {
    "sprint": {
      "name": "sprint-3",
      "status": 0,
      "id": 3,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 32,
      "2": 24,
      "3": 6,
      "4": 12,
      "unexecuted": 0
    }
  },
  {
    "sprint": {
      "name": "sprint-4",
      "status": 0,
      "id": 4,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 18,
      "2": 18,
      "3": 18,
      "4": 0,
      "unexecuted": 0
    }
  },
  {
    "sprint": {
      "name": "sprint-5",
      "status": 0,
      "id": 5,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 12,
      "2": 0,
      "3": 9,
      "4": 6,
      "unexecuted": 24
    }
  },
  {
    "sprint": {
      "name": "sprint-6",
      "status": 0,
      "id": 6,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 16,
      "3": 24,
      "4": 6,
      "unexecuted": 1
    }
  },
  {
    "sprint": {
      "name": "sprint-7",
      "status": 0,
      "id": 7,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 24,
      "3": 6,
      "4": 12,
      "unexecuted": 1
    }
  },
  {
    "sprint": {
      "name": "sprint-8",
      "status": 0,
      "id": 8,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 3,
      "3": 0,
      "4": 24,
      "unexecuted": 3
    }
  },
  {
    "sprint": {
      "name": "sprint-9",
      "status": 0,
      "id": 9,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 16,
      "2": 6,
      "3": 9,
      "4": 6,
      "unexecuted": 3
    }
  },
  {
    "sprint": {
      "name": "sprint-10",
      "status": 0,
      "id": 10,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 18,
      "2": 9,
      "3": 24,
      "4": 6,
      "unexecuted": 4
    }
  }
];

let data3 = [
  {
    "sprint": {
      "name": "sprint-1",
      "status": 0,
      "id": 1,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 6,
      "3": 4,
      "4": 6,
      "unexecuted": 18
    }
  },
  {
    "sprint": {
      "name": "sprint-2",
      "status": 0,
      "id": 2,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 24,
      "3": 12,
      "4": 32,
      "unexecuted": 3
    }
  },
  {
    "sprint": {
      "name": "sprint-3",
      "status": 0,
      "id": 3,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 32,
      "2": 4,
      "3": 24,
      "4": 24,
      "unexecuted": 0
    }
  },
  {
    "sprint": {
      "name": "sprint-4",
      "status": 0,
      "id": 4,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 16,
      "2": 24,
      "3": 24,
      "4": 18,
      "unexecuted": 0
    }
  },
  {
    "sprint": {
      "name": "sprint-5",
      "status": 0,
      "id": 5,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 12,
      "2": 0,
      "3": 6,
      "4": 0,
      "unexecuted": 24
    }
  },
  {
    "sprint": {
      "name": "sprint-6",
      "status": 0,
      "id": 6,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 3,
      "2": 6,
      "3": 3,
      "4": 18,
      "unexecuted": 3
    }
  },
  {
    "sprint": {
      "name": "sprint-7",
      "status": 0,
      "id": 7,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 16,
      "3": 0,
      "4": 32,
      "unexecuted": 48
    }
  },
  {
    "sprint": {
      "name": "sprint-8",
      "status": 0,
      "id": 8,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 24,
      "3": 48,
      "4": 0,
      "unexecuted": 0
    }
  },
  {
    "sprint": {
      "name": "sprint-9",
      "status": 0,
      "id": 9,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 32,
      "3": 4,
      "4": 18,
      "unexecuted": 3
    }
  },
  {
    "sprint": {
      "name": "sprint-10",
      "status": 0,
      "id": 10,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 0,
      "3": 18,
      "4": 12,
      "unexecuted": 6
    }
  }
];

let data4 = [
  {
    "sprint": {
      "name": "sprint-1",
      "status": 0,
      "id": 1,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 3,
      "3": 0,
      "4": 32,
      "unexecuted": 3
    }
  },
  {
    "sprint": {
      "name": "sprint-2",
      "status": 0,
      "id": 2,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 6,
      "2": 12,
      "3": 6,
      "4": 12,
      "unexecuted": 6
    }
  },
  {
    "sprint": {
      "name": "sprint-3",
      "status": 0,
      "id": 3,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 32,
      "2": 4,
      "3": 0,
      "4": 24,
      "unexecuted": 16
    }
  },
  {
    "sprint": {
      "name": "sprint-4",
      "status": 0,
      "id": 4,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 3,
      "3": 0,
      "4": 18,
      "unexecuted": 18
    }
  },
  {
    "sprint": {
      "name": "sprint-5",
      "status": 0,
      "id": 5,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 4,
      "2": 12,
      "3": 3,
      "4": 0,
      "unexecuted": 3
    }
  },
  {
    "sprint": {
      "name": "sprint-6",
      "status": 0,
      "id": 6,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 24,
      "2": 3,
      "3": 24,
      "4": 16,
      "unexecuted": 4
    }
  },
  {
    "sprint": {
      "name": "sprint-7",
      "status": 0,
      "id": 7,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 24,
      "2": 4,
      "3": 6,
      "4": 6,
      "unexecuted": 0
    }
  },
  {
    "sprint": {
      "name": "sprint-8",
      "status": 0,
      "id": 8,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 9,
      "2": 4,
      "3": 3,
      "4": 18,
      "unexecuted": 0
    }
  },
  {
    "sprint": {
      "name": "sprint-9",
      "status": 0,
      "id": 9,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 12,
      "2": 16,
      "3": 24,
      "4": 3,
      "unexecuted": 24
    }
  },
  {
    "sprint": {
      "name": "sprint-10",
      "status": 0,
      "id": 10,
      "revision": 52,
      "releaseId": 1,
      "createdOn": 1489489664000
    },
    "sprintStatus": {
      "1": 0,
      "2": 18,
      "3": 6,
      "4": 24,
      "unexecuted": 2
    }
  }
];

export const MOCK_DATA = [
    data1,
    data2,
    data3,
    data4
];