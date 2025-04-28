export default class PhoneMask {
  static formatPhoneNumber(phone) {
    const cleanedPhone = phone.replace(/\D/g, '');

    if (cleanedPhone.length === 13) {
      return cleanedPhone.replace(
        /(\d{2})(\d{2})(\d{5})(\d{4})/,
        '+$1 ($2) $3-$4',
      );
    } else if (cleanedPhone.length === 11) {
      return cleanedPhone.replace(/(\d{2})(\d{5})(\d{4})/, '+55 ($1) $2-$3');
    }

    return phone;
  }
}
