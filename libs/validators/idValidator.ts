export default function validateId(id) {
    var re = /^([a-z0-9]{4,})$/;
    return re.test(id);
  }