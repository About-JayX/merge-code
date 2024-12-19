import React from 'react';
import { Typography, Table, Card } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

interface DonationRecord {
  id: string;
  date: string;
  amount: number;
  donor: string;
  purpose: string;
  status: string;
}

const DaoPage: React.FC = () => {
  const { t } = useTranslation();

  // 示例数据
  const donationRecords: DonationRecord[] = [
    {
      id: '1',
      date: '2023-12-18',
      amount: 1000,
      donor: 'Anonymous',
      purpose: 'Community Development',
      status: 'Completed'
    },
    // 可以添加更多示例数据
  ];

  const columns = [
    {
      title: t('dao.date'),
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: t('dao.amount'),
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `${amount} DOGE`,
    },
    {
      title: t('dao.donor'),
      dataIndex: 'donor',
      key: 'donor',
    },
    {
      title: t('dao.purpose'),
      dataIndex: 'purpose',
      key: 'purpose',
    },
    {
      title: t('dao.status'),
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <Card>
      <Title level={2}>{t('dao.title')}</Title>
      <Table
        dataSource={donationRecords}
        columns={columns}
        rowKey="id"
        pagination={{
          defaultPageSize: 100,
          pageSizeOptions: ['50', '100', '200', '500'],
          showSizeChanger: true,
          showTotal: (total) => t('dao.total', { total }),
        }}
      />
    </Card>
  );
};

export default DaoPage; 