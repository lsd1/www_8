/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mge_member', {
		uno: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
            primaryKey: true
		},
		user_name: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		user_avatar: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		diamond: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		freeze_diamond: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'mge_member',
        underscored: true,
		timestamps: true
	});
};
