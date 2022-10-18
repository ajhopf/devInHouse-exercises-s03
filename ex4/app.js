const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };

const mesclaObjetos = (obj1, obj2) => {
  const newObj = { ...obj1, ...obj2 };

  console.log(newObj);
};

mesclaObjetos(objUm, objDois);
mesclaObjetos([1], { a: 2 });
