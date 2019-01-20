/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mge_member', {
		uno: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true
		},
		diamond: {
			type: "DOUBLE(15,2) UNSIGNED",
			allowNull: false,
			defaultValue: '0.00'
		},
		freezeDiamond: {
			type: "DOUBLE(15,2) UNSIGNED",
			allowNull: false,
			defaultValue: '0.00'
		}
	}, {
		tableName: 'mge_member',
		timestamps: false
	});
};
