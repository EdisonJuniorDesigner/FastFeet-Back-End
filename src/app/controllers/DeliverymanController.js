import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const DeliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (DeliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists.' });
    }

    const { id, name, email } = await Deliveryman.create(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const deliveryman = await Deliveryman.findOne({
      where: { id: req.params.id },
    });

    if (!deliveryman) {
      return res.status(401).json({ error: 'Solicited does not exist' });
    }

    const { email } = req.body;

    if (email && email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({ where: { email } });

      if (deliverymanExists) {
        return res.status(400).json({ error: 'Deliveryman already exists.' });
      }
    }

    const { id, name } = await deliveryman.update(req.body);

    return res.json({ id, name, email });
  }
}

export default new DeliverymanController();
