const { deterministicPartitionKey } = require("./dpk");

const TEST_RESULTS = [
  {
    description: 'Returns the literal \'0\' when given no input',
    event: null,
    result: '0'
  },
  {
    description: 'Returns the literal other key hash when given no partitial key',
    event: { otherKey: 'efienig' },
    result: '9ac3548a91d8f4397075c54ddf785ce6ecef4445b3ddcde21d91a10bc1afbc90e0cafe7b2cd617c202fe867e817b84a56762208da94a74552ea67c26f49cc86b'
  },
  {
    description: 'Returns the literal value when given value less then max partition key length',
    event: {
      partitionKey: 'uwb343ibgie',
    },
    result: 'uwb343ibgie',
  },
  {
    description: 'Returns the literal hex of value when given value more then max partition key length',
    event: {
      partitionKey: 'ieifeigbiegieigeigieiieifeigbiegieigeigieiieifeigbiegieigeigieiieifeigbiegieigeigieiieifeigbiegieigeigieiieifeigbiegieigeigieiieifeigbiegieigeigieiieifeigbiegieigeigieiieifeigbiegieigeigieiieifeigbiegieigeigieiieifeigbiegieigeigieifeigbiegieigeigieiieiieifeigbiegieigeigiei',
    },
    result: 'e4183dda93777b2c2283bd19c3f02b557877abb061078ed7d77b803da031bada0c75da8ddba877b295163160a4a16f61f804d6cbfb3c845b888c1e5453220cb5',
  }
]

describe("deterministicPartitionKey", () => {
  TEST_RESULTS.forEach(({ description, event, result }) => {
    it(description, () => {
      const trivialKey = deterministicPartitionKey(event);

      expect(trivialKey).toBe(result);
    });
  })
});
