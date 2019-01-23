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
			allowNull: false,
            defaultValue: 0
		},
		type: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false
		},
        before_change: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        change: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
		after_change: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
        source: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
		content: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
        vsc: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        freeze_diamond:{
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        }
	}, {
		tableName: 'mge_diamond_log',
        underscored: true,
		timestamps: true,
	});
};
