/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mge_order_mora', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		uno: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		targetUno: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		shape: {
			type: DataTypes.ENUM('0','1','2'),
			allowNull: false
		},
		targetShape: {
			type: DataTypes.ENUM('0','1','2'),
			allowNull: false
		},
		diamond: {
			type: "DOUBLE(15,2) UNSIGNED",
			allowNull: false,
			defaultValue: '0.00'
		},
		status: {
			type: DataTypes.ENUM('0','1','2','3'),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'mge_order_mora',
		timestamps: false
	});
};
