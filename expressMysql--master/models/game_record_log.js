/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_record_log', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        order_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        room_owner_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        uid: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
		target_uid: {
			type: DataTypes.INTEGER(10).UNSIGNED,
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
        res_diamond: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        shape: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
        target_shape: {
            type: DataTypes.INTEGER(4),
            allowNull: true,
            defaultValue: null
        },
		status: {
			type: DataTypes.ENUM('0','1','2'),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'game_record_log',
        underscored: true,
        timestamps: true
	});
};
