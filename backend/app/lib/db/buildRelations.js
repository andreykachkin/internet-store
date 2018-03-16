const buildBelongsToManyRelation = (db, rule) => {
    db[rule.leftModel].belongsToMany(
        db[rule.rightModel],
        {
            through: db[rule.extra.through],
            foreignKey: {
                fieldName: rule.extra.fkey,
                allowNull: !!rule.extra.nullable,
            },
            otherKey: rule.extra.okey,
            as: rule.extra.as || undefined,
        },
    );
};

const buildRelations = (db, rules) => rules
    .map(rule => {
        const [left, relationType, right, extraOpts] = rule;
        const [leftModel, leftKey] = left.split('.');
        const [rightModel, rightKey] = right.split('.');
        const [foreignKeyFieldName, targetKeyFieldName] = relationType === 'belongsTo'
            ? [leftKey, rightKey]
            : [rightKey, undefined];
        const extra = extraOpts || {};

        return { leftModel, relationType, rightModel, foreignKeyFieldName, targetKeyFieldName, extra };
    })
    .forEach(rule => {
        const { leftModel, relationType, rightModel, foreignKeyFieldName, targetKeyFieldName, extra } = rule;

        if (!db[leftModel]) {
            throw new Error(`Model not found: ${leftModel}`);
        }
        if (!db[rightModel]) {
            throw new Error(`Model not found: ${rightModel}`);
        }

        if (relationType === 'belongsToMany') {
            return buildBelongsToManyRelation(db, rule);
        }

        return db[leftModel][relationType](
            db[rightModel],
            {
                foreignKey: {
                    fieldName: foreignKeyFieldName,
                    allowNull: !!extra.nullable,
                },
                targetKey: targetKeyFieldName,
                as: extra.as || undefined,
            },
        );
    });

export default buildRelations;
