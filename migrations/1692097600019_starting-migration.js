/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('matches', {
    id: 'id',
    status: 'varchar(40)',
    location: 'varchar(1000)',
    date: {
      type: 'bigint',
      notNull: false,
    },
    game: 'varchar(1000)',
    results: { type: 'JSON[]', notNull: false },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updatedAt: {
      type: 'timestamp',
      notNull: false,
    },
  });
  pgm.createTable('teams', {
    id: 'id',
    name: { type: 'varchar(1000)', notNull: true },
    logo: { type: 'varchar(1000)', notNull: false },
    matches: { type: 'text[]', notNull: false },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updatedAt: {
      type: 'timestamp',
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('matches');
  pgm.dropTable('teams');
};
