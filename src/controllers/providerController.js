import storage from '../api/firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';

export async function uploadImage(imageFile, imageName) {
  try {
    const imageRef = ref(storage, imageName);
    const { ref: { _location, _service } } = await uploadBytes(imageRef, imageFile);
    const { bucket, path_ } = _location;
    const { _host, _protocol } = _service;
    const src = `${_protocol}://${_host}/v0/b/${bucket}/o/${path_}?alt=media`;

    return src;
  } catch (error) {
    return null;
  }
}

export function formatPhone(originalPhone) {
  return originalPhone.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/\((\d)(\d)(\d)/, '($1$2) $3')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?/, '$1');
}
