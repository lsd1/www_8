/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('game_notice', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		uid: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
        content: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
		type: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
            defaultValue: 0
		},
		status: {
			type: DataTypes.INTEGER(3).UNSIGNED,
            allowNull: false,
            defaultValue: 0
		}
	}, {
		tableName: 'game_notice',
        underscored: true,
        timestamps: true
	});
};
