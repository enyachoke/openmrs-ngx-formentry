// South East Asia Non Laboratory CVD Risk Array of Arrays

// Vertically we have the BMI value eg for the first array [26(bmi < 20), 28(bmi 20 - 24), 30(bmi 25 - 29), 32(bmi 30 - 35), 34(bmi >= 35)]

export const southEastAsiaCvdRiskTables = [
  // Men
  [
    // Non smoker
    [
      // Age 70 - 74
      [
        [26, 28, 30, 32, 34], // SBP ≥180
        [21, 23, 25, 26, 28], // SBP 160-179
        [17, 19, 20, 21, 23], // SBP 140-159
        [14, 15, 16, 17, 18], // SBP 120-139
        [11, 12, 13, 14, 15], // sbp < 120
      ],
      // Age 65 - 69
      [
        [20, 22, 24, 26, 28], // sbp ≥180
        [16, 17, 19, 21, 22], // sbp 160-179
        [12, 14, 15, 16, 18], // sbp 140-159
        [10, 11, 12, 13, 14], // sbp 120-139
        [8, 8, 9, 10, 11], // < 120
      ],
      // Age 60 - 64
      [
        [15, 17, 19, 21, 23], // sbp ≥180
        [12, 13, 14, 16, 18], // sbp 160-179
        [9, 10, 11, 12, 14], // sbp 140-159
        [7, 8, 8, 9, 10], // sbp 120-139
        [5, 6, 6, 7, 8], // sbp < 120
      ],
      // Age 55 - 59
      [
        [12, 13, 15, 16, 18], // sbp ≥180
        [9, 10, 11, 12, 14], // sbp 160-179
        [7, 7, 8, 9, 10], // sbp 140-159
        [5, 5, 6, 7, 8], // sbp 120-139
        [4, 4, 4, 5, 6], // sbp < 120
      ],
      // Age 50 - 54
      [
        [9, 10, 11, 13, 15], // sbp ≥180
        [7, 7, 8, 9, 11], // sbp 160-179
        [5, 5, 6, 7, 8], // sbp 140-159
        [3, 4, 4, 5, 6], // sbp 120-139
        [2, 3, 3, 4, 4], // sbp < 120
      ],
      // Age 45 - 49
      [
        [7, 8, 9, 10, 12], // ≥180
        [5, 6, 6, 7, 8], // 160-179
        [3, 4, 4, 5, 6], // 140-159
        [2, 3, 3, 4, 4], // 120-139
        [2, 2, 2, 2, 3], // < 120
      ],
      // Age 40 - 44
      [
        [5, 6, 7, 8, 10], // ≥180
        [4, 4, 5, 6, 7], // 160-179
        [2, 3, 3, 4, 4], // 140-159
        [2, 2, 2, 3, 3], // 120-139
        [1, 1, 2, 2, 2],
      ],
    ],

    // Smoker
    [
      // Age 70 - 74
      [
        [34, 36, 39, 41, 44], // ≥180
        [28, 30, 32, 34, 36], // 160-179
        [23, 24, 26, 28, 30], // 140-159
        [18, 20, 21, 23, 24], // 120-139
        [15, 16, 17, 18, 20], // < 120
      ],
      // Age 65 - 69
      [
        [28, 30, 33, 36, 39], // ≥180
        [22, 24, 26, 29, 31], // 160-179
        [18, 19, 21, 23, 25], // 140-159
        [14, 15, 16, 18, 20], // 120-139
        [11, 12, 13, 14, 16], // < 120
      ],
      // Age 60 - 64
      [
        [23, 25, 28, 31, 34], // ≥180
        [18, 18, 20, 22, 24], // 160-179
        [14, 15, 17, 19, 21], // 140-159
        [10, 12, 13, 14, 16], // 120-139
        [8, 9, 10, 11, 12], // < 120
      ],
      // Age 55 - 59
      [
        [19, 21, 24, 27, 30], // ≥180
        [14, 16, 18, 20, 23], // 160-179
        [11, 12, 13, 15, 17], // 140-159
        [8, 9, 10, 11, 13], // 120-139
        [6, 7, 7, 8, 10],
      ],
      // Age 50 - 54
      [
        [15, 18, 20, 23, 27], // ≥180
        [11, 13, 15, 17, 20], // 160-179
        [8, 9, 11, 12, 14], // 140-159
        [6, 7, 8, 9, 11], // 120-139
        [4, 5, 6, 7, 8],
      ],
      // Age 45 - 49
      [
        [13, 15, 17, 20, 23], // ≥180
        [9, 10, 12, 14, 17], // 160-179
        [6, 7, 9, 10, 12], // 140-159
        [4, 5, 6, 7, 8], // 120-139
        [3, 4, 4, 5, 6],
      ],
      // Age 40 - 44
      [
        [10, 12, 14, 17, 20], // ≥180
        [7, 8, 10, 12, 14], // 160-179
        [5, 6, 7, 8, 10], // 140-159
        [3, 4, 5, 6, 7], // 120-139
        [2, 3, 3, 4, 5],
      ],
    ],
  ],

  // Women
  [
    // Non smoker
    [
      // Age 70 -74
      [
        [21, 22, 22, 23, 24], // ≥180
        [17, 18, 19, 19, 20], // 160-179
        [15, 15, 16, 16, 17], // 140-159
        [12, 12, 13, 13, 14], // 120-139
        [10, 10, 11, 11, 11], // < 120
      ],
      // Age 65 - 69
      [
        [16, 17, 18, 18, 19], // ≥180
        [13, 14, 14, 15, 15], // 160-179
        [11, 11, 11, 12, 12], // 140-159
        [9, 9, 9, 10, 10], // 120-139
        [7, 7, 7, 8, 8],
      ],
      // Age 60 - 64
      [
        [13, 13, 14, 14, 15], // ≥180
        [10, 10, 11, 11, 12], // 160-179
        [8, 8, 8, 9, 9], // 140-159
        [6, 6, 7, 7, 7], // 120-139
        [5, 5, 5, 5, 6],
      ],
      // Age 55 - 59
      [
        [10, 10, 11, 11, 12], // ≥180
        [8, 8, 8, 9, 9], // 160-179
        [6, 6, 6, 7, 7], // 140-159
        [4, 5, 5, 5, 5], // 120-139
        [3, 3, 4, 4, 4],
      ],
      // Age 50 - 54
      [
        [8, 8, 8, 9, 9], // ≥180
        [6, 6, 6, 7, 7], // 160-179
        [4, 4, 5, 5, 5], // 140-159
        [3, 3, 3, 4, 4], // 120-139
        [2, 2, 3, 3, 3],
      ],
      // Age 45 - 49
      [
        [6, 6, 7, 7, 7], // ≥180
        [4, 5, 5, 5, 5], // 160-179
        [3, 3, 3, 4, 4], // 140-159
        [2, 2, 2, 3, 3], // 120-139
        [2, 2, 2, 2, 2],
      ],
      // Age 40 - 44
      [
        [5, 5, 5, 5, 6], // ≥180
        [3, 3, 4, 4, 4], // 160-179
        [2, 2, 3, 3, 3], // 140-159
        [2, 2, 2, 2, 2], // 120-139
        [1, 1, 1, 1, 1],
      ],
    ],

    // Smoker
    [
      // Age 70 - 74
      [
        [30, 31, 32, 33, 34], // ≥180
        [25, 26, 27, 28, 29], // 160-179
        [21, 22, 22, 23, 24], // 140-159
        [17, 18, 19, 19, 20], // 120-139
        [14, 15, 15, 16, 17],
      ],
      // Age 65 - 69
      [
        [25, 26, 27, 29, 30], // ≥180
        [21, 22, 22, 23, 24], // 160-179
        [17, 18, 18, 19, 20], // 140-159
        [14, 14, 15, 15, 16], // 120-139
        [11, 11, 12, 12, 13],
      ],
      // Age 60 - 64
      [
        [21, 22, 23, 25, 26], // ≥180
        [17, 18, 19, 20, 21], // 160-179
        [13, 14, 15, 16, 16], // 140-159
        [11, 11, 12, 12, 13], // 120-139
        [8, 9, 9, 10, 10],
      ],
      // Age 55 - 59
      [
        [18, 19, 20, 21, 22], // ≥180
        [14, 15, 15, 16, 17], // 160-179
        [11, 11, 12, 13, 13], // 140-159
        [8, 9, 9, 10, 10], // 120-139
        [6, 7, 7, 7, 8],
      ],
      // Age 50 - 54
      [
        [15, 16, 17, 18, 19], // ≥180
        [11, 12, 13, 14, 14], // 160-179
        [9, 9, 10, 10, 11], // 140-159
        [6, 7, 7, 8, 8], // 120-139
        [5, 5, 5, 6, 6],
      ],
      // Age 45 - 49
      [
        [13, 14, 14, 15, 16], // ≥180
        [9, 10, 11, 11, 12], // 160-179
        [7, 7, 8, 8, 9], // 140-159
        [5, 5, 6, 6, 6], // 120-139
        [4, 4, 4, 4, 5],
      ],
      // Age 40 - 44
      [
        [11, 11, 12, 13, 14], // ≥180
        [8, 8, 9, 9, 10], // 160-179
        [5, 6, 6, 7, 7], // 140-159
        [4, 4, 4, 5, 5], // 120-139
        [3, 3, 3, 3, 4],
      ],
    ],
  ],
];
