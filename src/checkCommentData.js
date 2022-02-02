const commentDataIsValid = (user, comment) => {
  if (user !== '' && comment !== '') {
    return true;
  }
  return false;
};

export default commentDataIsValid;
