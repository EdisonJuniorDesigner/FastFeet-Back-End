import Mail from '../../lib/Mail';

class DetailMail {
  get key() {
    return 'DetailMail';
  }

  async handle({ data }) {
    const { delivery, deliveryman, recipient } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: `Tem uma nova entrega disponível pra você.`,
      template: 'detailMail',
      context: {
        product: delivery.product,
        deliveryman: deliveryman.name,
        recipientName: recipient.name,
        recipientStreet: recipient.street,
        recipientNumber: recipient.number,
        recipientComplement: recipient.complement,
        recipientState: recipient.state,
        recipientCity: recipient.city,
        recipientZipCode: recipient.zip_code,
      },
    });
  }
}

export default new DetailMail();
