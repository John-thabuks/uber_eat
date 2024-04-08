"""Added column status

Revision ID: 1cf50ed146e2
Revises: 95ed9ad7d4f6
Create Date: 2024-04-03 12:58:39.790834

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1cf50ed146e2'
down_revision = '95ed9ad7d4f6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.add_column(sa.Column('status', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.drop_column('status')

    # ### end Alembic commands ###