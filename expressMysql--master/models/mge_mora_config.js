/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mge_mora_config', {
		id: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		index: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		value: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		content: {
			type: DataTypes.STRING(30),
			allowNull: false
		}
	}, {
		tableName: 'mge_mora_config',
        underscored: true,
		timestamps: true
	});
};
