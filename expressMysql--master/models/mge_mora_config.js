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
			allowNull: true
		},
		value: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		content: {
			type: DataTypes.STRING(30),
			allowNull: true
		}
	}, {
		tableName: 'mge_mora_config',
		timestamps: false
	});
};
