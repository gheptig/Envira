module.exports = (sequelize, DataTypes) => {
  // For user profile card
  const UserProfile = sequelize.define('UserProfile', {
    // FIRST AND LAST NAME
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    // CITY, STATE, and ZIP
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      unique: false,
    }
  });

  UserProfile.associate = (models) => {
    UserProfile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return UserProfile;
};
