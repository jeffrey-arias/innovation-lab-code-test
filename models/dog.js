const dogModel = (sequelize, Sequelize) => {
  const Dog = sequelize.define("dog", {
      id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
      },
      url: {
          type: Sequelize.STRING,
          allowNull: false,
          trim: true
      },
      caption: {
          type: Sequelize.STRING,
          allowNull: true,
          trim: true
      },
      mediaType: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
    }
  })

  return Dog;
}

export default dogModel;