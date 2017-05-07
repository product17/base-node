import controller from '../controllers';

export default function (req, res) {
  res.send(controller.hello('hello world'));
}
