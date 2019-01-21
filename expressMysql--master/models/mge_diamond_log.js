/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mge_diamond_log', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		uno: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		traget_uno: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false
		},
		change: {
			type: "DOUBLE(15,2) UNSIGNED",
			allowNull: false
		},
		content: {
			type: DataTypes.STRING(30),
			allowNull: false
		}
	}, {
		tableName: 'mge_diamond_log',
        underscored: true,
		timestamps: true,
	});
};
