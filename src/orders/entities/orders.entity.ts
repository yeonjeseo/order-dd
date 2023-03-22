import { CoreEntity } from '../../common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity('ITEMS')
export class Purchase extends CoreEntity {
  @Column()
  ordererTel: string;

  @Column()
  ordererNo: string;

  @Column()
  payLocationType: string;

  @Column()
  orderId: string;

  @Column()
  paymentDate: Date;

  @Column()
  orderDate: Date;

  @Column()
  ordererName: string;

  @Column()
  isDeliveryMemoParticularInput: boolean;

  @Column()
  deliveryMemo: string;
}