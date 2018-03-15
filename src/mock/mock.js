import Mock from 'mockjs'

function getRImg () {
	return Mock.Random.image('900x400', Mock.Random.hex())
}

Mock.mock(/getSlides/, [
    {
      src: getRImg (),
      title: '@ctitle(4, 12)',
      ky: 1,
      toKey: '/detail/analysis'
    },
    {
      src: getRImg (),
      title: '@ctitle(4, 12)',
      ky: 2,
      toKey: '/detail/count'
    },
    {
      src: getRImg (),
      title: '@ctitle(4, 12)',
      ky: 3,
      toKey: '/detail/publish'
    },
    {
      src: getRImg (),
      title: '@ctitle(4, 12)',
      ky: 4,
      toKey: '/detail/forecast'
    }
])

Mock.mock(/getProductList/, {
    pc: {
      title: 'PC产品',
      list: [
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        },
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        },
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        },
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        },
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        }
      ]
    },
    app: {
      title: '手机应用类',
      last: true,
      list: [
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        },
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        },
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        },
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        },
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        },
        {
          name: '@ctitle(4)',
          url: '@url',
          hot: '@boolean'
        }
      ]
    }
})

Mock.mock(/getNewsList/, {
    'list|12': [{
        'url': '@url',
        'title': '@ctitle(5, 10)'
    }]
})

Mock.mock(/getBoardList/, [
    {
      title: '@ctitle(4)',
      description: '@ctitle(8, 12)',
      id: 'car',
      toKey: '/detail/analysis',
      saleout: '@boolean'
    },
    {
      title: '@ctitle(4)',
      description: '@ctitle(8, 12)',
      id: 'earth',
      toKey: '/detail/count',
      saleout: '@boolean'
    },
    {
      title: '@ctitle(4)',
      description: '@ctitle(8, 12)',
      id: 'loud',
      toKey: '/detail/forecast',
      saleout: '@boolean'
    },
    {
      title: '@ctitle(4)',
      description: '@ctitle(8, 12)',
      id: 'hill',
      toKey: '/detail/publish',
      saleout: '@boolean'
    }
])

Mock.mock(/login/, {
    'username': 'Yjanuary',
    'userId': '000001'
})

Mock.mock(/getPrice/, {
    'number|1-1000': 100
})

Mock.mock(/submited/, {
    'orderId': /[a-z]\d{16}/
})

Mock.mock(/checkOrder/, {
    'status': 'success'
})

Mock.mock(/getTableData/, {
    "total": 25,
    "list|25": [
      {
        "orderId": "@id",
        "product": "@ctitle(4)",
        "version": "@ctitle(3)",
        "period": "@integer(1,5)年",
        "buyNum": "@integer(1,8)",
        "date": "@date()",
        "amount": "@integer(100, 500)元"
      }
    ]
})