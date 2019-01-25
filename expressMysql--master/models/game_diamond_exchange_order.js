/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_diamond_exchange_order', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		uid: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		orderNO: {
			type: DataTypes.CHAR(24),
			allowNull: false,
			unique: true
		},
		diamond: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00000000'
		},
        orderType: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		payType: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		content: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		datetime: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '1970-01-01 00:00:00'
		},
		payTime: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '1970-01-01 00:00:00'
		},
		finishTime: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '1970-01-01 00:00:00'
		}
	}, {
		tableName: 'game_diamond_exchange_order',
		timestamps: false,
		underscored: true,
        timestamps: false
	});
};
