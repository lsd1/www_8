/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_diamond_log', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        join_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
		uid: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		traget_uid: {
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
        status:{
            type: DataTypes.INTEGER(4),
            allowNull: false,
            defaultValue: 0
		},
        freeze_diamond:{
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        }
	}, {
		tableName: 'game_diamond_log',
        underscored: true,
		timestamps: true,
	});
};
