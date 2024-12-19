import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 生成随机数字
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max, decimals = 2) => parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

// 生成随机日期
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// 生成 500 条记录
const generateMembers = () => {
  const members = [];
  const startDate = new Date('2023-12-01');
  const endDate = new Date('2024-01-25');

  for (let i = 1; i <= 500; i++) {
    // 随机选择捐赠的币种数量（1-4种）
    const donationTypes = randomNumber(1, 4);
    const selectedTypes = [];
    const allTypes = ['USDT', 'USDC', 'SOL', 'MINIDOGE'];
    
    // 随机选择币种
    while (selectedTypes.length < donationTypes) {
      const type = allTypes[randomNumber(0, allTypes.length - 1)];
      if (!selectedTypes.includes(type)) {
        selectedTypes.push(type);
      }
    }

    // 生成捐赠金额
    const totalDonation = {
      USDT: 0,
      USDC: 0,
      SOL: 0,
      MINIDOGE: 0
    };

    let totalNftRights = 0;

    selectedTypes.forEach(type => {
      switch (type) {
        case 'USDT':
        case 'USDC':
          const stableAmount = randomNumber(20, 1000);
          totalDonation[type] = stableAmount;
          totalNftRights += Math.floor(stableAmount / 20);
          break;
        case 'SOL':
          const solAmount = randomFloat(0.1, 5, 3);
          totalDonation[type] = solAmount;
          totalNftRights += Math.floor(solAmount / 0.1);
          break;
        case 'MINIDOGE':
          const minidogeAmount = randomNumber(10000, 200000);
          totalDonation[type] = minidogeAmount;
          totalNftRights += Math.floor(minidogeAmount / 10000);
          break;
      }
    });

    // 计算投票权（基础1票 + 每5个NFT额度1票，上限4票）
    const votingRights = Math.min(1 + Math.floor(totalNftRights / 5), 4);

    members.push({
      address: `31svWAq2Z7ng6rcKQV2ZkT3bY1bHqgo2Xpt${i.toString().padStart(4, '0')}`,
      totalDonation,
      lastDonation: randomDate(startDate, endDate).toISOString(),
      donationCount: randomNumber(1, 5),
      totalNftRights,
      votingRights
    });
  }

  return members;
};

// 生成数据并写入文件
const mockData = {
  members: generateMembers()
};

fs.writeFileSync(
  path.join(__dirname, '../src/config/mockData/donations.json'),
  JSON.stringify(mockData, null, 2)
);

console.log('Mock data generated successfully!'); 