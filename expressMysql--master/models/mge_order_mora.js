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
		target_uno: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		shape: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		target_shape: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		grade: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false
		},
		diamond_number: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		status: {
			type: DataTypes.ENUM('0','1','2','3'),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
        underscored: true,
		timestamps: true
	});
};
