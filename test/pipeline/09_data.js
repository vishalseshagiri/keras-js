// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function() {
  var DATA = {
    pipeline_09: {
      weights: [
        {
          shape: [ 3, 3, 2, 4 ],
          data: [
            -0.33704585,
            -0.76599005,
            0.43704017,
            -0.5908736,
            0.52324417,
            0.08437049,
            -0.4699497,
            -0.17460028,
            -0.7879552,
            0.47957678,
            0.35859039,
            -0.1946386,
            -0.04222754,
            0.43957667,
            0.33056406,
            0.17665698,
            0.03271313,
            0.96557731,
            -0.14530269,
            -0.42844754,
            -0.9892456,
            -0.6573214,
            0.9645642,
            0.53937169,
            0.03144698,
            0.17482522,
            -0.01958232,
            0.35636633,
            0.03950257,
            0.29152626,
            -0.86949394,
            0.47902437,
            -0.11383247,
            -0.67173347,
            -0.27645687,
            -0.56208137,
            -0.38046996,
            -0.89436374,
            0.76776252,
            0.607511,
            0.0836086,
            0.20298698,
            -0.65466554,
            0.05431541,
            0.2909275,
            0.7421486,
            0.55794809,
            -0.0110642,
            0.05647404,
            -0.4401333,
            0.53312743,
            0.75781162,
            0.91153872,
            0.94005194,
            -0.17789221,
            -0.017994,
            -0.28008426,
            0.52780133,
            -0.04725771,
            0.60518146,
            0.60948463,
            0.07878468,
            -0.76871217,
            -0.06945041,
            0.57079619,
            -0.51862638,
            0.85541681,
            0.3306379,
            0.61299955,
            0.61458121,
            -0.94657194,
            -0.10072256
          ]
        },
        { shape: [ 4 ], data: [ 0.17620778, -0.91407573, -0.25756853, -0.54019677 ] }
      ],
      expected: {
        shape: [ 3, 3, 4 ],
        data: [
          1.04524732,
          0.38465521,
          0.24469832,
          0,
          0.4747467,
          0.21371275,
          0.35919541,
          0.20463341,
          0.73868883,
          0.12991822,
          0.14923108,
          0.07960907,
          0.30252352,
          0.11497316,
          0.473133,
          0.48031878,
          0.21824871,
          0.2774919,
          0.57072282,
          0.28949139,
          0.06555159,
          0,
          0.20446467,
          0,
          0,
          0.23065618,
          0.72684753,
          0.00995636,
          1.00936437,
          0.02946413,
          0.58205169,
          0.70908904,
          0.93225884,
          0.2935122,
          0.28039569,
          0.26406175
        ]
      },
      input: {
        shape: [ 8, 8, 2 ],
        data: [
          -0.33704585,
          -0.76599005,
          0.43704017,
          -0.5908736,
          0.52324417,
          0.08437049,
          -0.4699497,
          -0.17460028,
          -0.7879552,
          0.47957678,
          0.35859039,
          -0.1946386,
          -0.04222754,
          0.43957667,
          0.33056406,
          0.17665698,
          0.03271313,
          0.96557731,
          -0.14530269,
          -0.42844754,
          -0.9892456,
          -0.6573214,
          0.9645642,
          0.53937169,
          0.03144698,
          0.17482522,
          -0.01958232,
          0.35636633,
          0.03950257,
          0.29152626,
          -0.86949394,
          0.47902437,
          -0.11383247,
          -0.67173347,
          -0.27645687,
          -0.56208137,
          -0.38046996,
          -0.89436374,
          0.76776252,
          0.607511,
          0.0836086,
          0.20298698,
          -0.65466554,
          0.05431541,
          0.2909275,
          0.7421486,
          0.55794809,
          -0.0110642,
          0.05647404,
          -0.4401333,
          0.53312743,
          0.75781162,
          0.91153872,
          0.94005194,
          -0.17789221,
          -0.017994,
          -0.28008426,
          0.52780133,
          -0.04725771,
          0.60518146,
          0.60948463,
          0.07878468,
          -0.76871217,
          -0.06945041,
          0.57079619,
          -0.51862638,
          0.85541681,
          0.3306379,
          0.61299955,
          0.61458121,
          -0.94657194,
          -0.10072256,
          -0.20867325,
          0.67206388,
          -0.7091287,
          -0.37040119,
          -0.19479755,
          -0.27238751,
          0.40815762,
          0.46682499,
          0.14357759,
          0.70909437,
          0.72072034,
          -0.34537329,
          0.94900334,
          0.7811956,
          -0.05788226,
          0.55793823,
          -0.58275979,
          -0.9408907,
          -0.99961866,
          -0.61331503,
          0.31771212,
          -0.97225187,
          0.5547143,
          0.29870985,
          0.09646246,
          0.18945358,
          -0.90285618,
          -0.13699646,
          0.91833066,
          0.39441019,
          0.33963873,
          -0.78466329,
          0.60209752,
          -0.94062026,
          0.18010792,
          0.92858172,
          -0.52799242,
          0.41509646,
          0.54362401,
          0.58928085,
          0.30124276,
          -0.25104719,
          0.25849856,
          -0.40750885,
          0.03137015,
          0.47267263,
          0.96452281,
          0.78649294,
          0.41429247,
          -0.85004428,
          0.1775019,
          -0.475431,
          0.04413765,
          0.0808915,
          -0.25057979,
          0.17138563
        ]
      }
    }
  };

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA);
})();
